"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog"
import { 
  Trash2, 
  Edit, 
  MessageSquare, 
  RefreshCw,
  Eye,
  EyeOff,
  ExternalLink,
  Download
} from "lucide-react"
import Image from "next/image"
import { supabase, QuoteRequest, Contact } from "@/lib/supabase"

interface QuoteRequestWithMemo extends QuoteRequest {
  memo?: string
}

interface ContactWithMemo extends Contact {
  memo?: string
}

interface EditingItem extends QuoteRequestWithMemo {
  table?: 'quote_requests' | 'contacts'
}

interface SelectedItem extends QuoteRequestWithMemo {
  table?: 'quote_requests' | 'contacts'
}

export default function DashboardPage() {
  const { t, ready } = useTranslation('common')
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequestWithMemo[]>([])
  const [contacts, setContacts] = useState<ContactWithMemo[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'quotes' | 'contacts'>('quotes')
  const [editingItem, setEditingItem] = useState<EditingItem | null>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [memoDialogOpen, setMemoDialogOpen] = useState(false)
  const [memoText, setMemoText] = useState("")
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null)
  const [showSensitiveData, setShowSensitiveData] = useState<{ [key: string]: boolean }>({})
  const [error, setError] = useState<string | null>(null)
  const [attachmentModalOpen, setAttachmentModalOpen] = useState(false)
  const [selectedAttachment, setSelectedAttachment] = useState<QuoteRequestWithMemo | null>(null)

  // 데이터 로드
  const loadData = async () => {
    setLoading(true)
    try {
      // Quote requests 조회
      const { data: quotesData, error: quotesError } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false })

      if (quotesError) {
        console.error('Error loading quote requests:', quotesError)
      } else {
        setQuoteRequests(quotesData || [])
      }

      // Contacts 조회
      const { data: contactsData, error: contactsError } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })

      console.log('Contacts data:', contactsData)
      console.log('Contacts error:', contactsError)

      if (contactsError) {
        console.error('Error loading contacts:', contactsError)
        setError(`Contacts data load error: ${contactsError.message}`)
      } else {
        setContacts(contactsData || [])
        console.log('Contacts set:', contactsData || [])
        setError(null)
      }
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (ready) {
      loadData()
    }
  }, [ready])

  // 번역이 준비되지 않았으면 로딩 상태 표시
  if (!ready) {
    return (
      <div className="min-h-screen bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-pulse text-[#0A3D62] text-4xl font-bold mb-4">
              Loading...
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 아이템 삭제
  const deleteItem = async (id: string, table: 'quote_requests' | 'contacts') => {
    if (!confirm(t('are_you_sure'))) return

    try {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting item:', error)
        alert('Error occurred while deleting item.')
      } else {
        alert(t('item_deleted'))
        loadData()
      }
    } catch (error) {
      console.error('Error deleting item:', error)
      alert('Error occurred while deleting item.')
    }
  }

  // 아이템 수정
  const updateItem = async (id: string, updates: Partial<EditingItem>, table: 'quote_requests' | 'contacts') => {
    try {
      // id와 created_at, table 필드 제거
      const cleanUpdates = { ...updates }
      delete cleanUpdates.id
      delete cleanUpdates.created_at
      delete cleanUpdates.table

      console.log('Updating item:', { id, updates: cleanUpdates, table })
      
      const { error } = await supabase
        .from(table)
        .update(cleanUpdates)
        .eq('id', id)

      if (error) {
        console.error('Error updating item:', error)
        console.error('Error details:', JSON.stringify(error, null, 2))
        
        if (error.message.includes('policy') || error.message.includes('permission')) {
          alert(`Permission denied: Please check RLS policies. Error: ${error.message}`)
        } else {
          alert(`Error occurred while updating item: ${error.message || 'Unknown error'}`)
        }
      } else {
        alert('Item updated successfully.')
        setEditDialogOpen(false)
        setEditingItem(null)
        loadData()
      }
    } catch (error) {
      console.error('Error updating item:', error)
      alert('Error occurred while updating item.')
    }
  }

  // 메모 저장 (로컬 스토리지 사용)
  const saveMemo = (id: string, table: string) => {
    const memoKey = `${table}_${id}_memo`
    localStorage.setItem(memoKey, memoText)
    alert('Memo saved successfully.')
    setMemoDialogOpen(false)
    setMemoText("")
    setSelectedItem(null)
  }

  // 메모 로드
  const loadMemo = (id: string, table: string) => {
    const memoKey = `${table}_${id}_memo`
    return localStorage.getItem(memoKey) || ""
  }

  // 수정 다이얼로그 열기
  const openEditDialog = (item: QuoteRequestWithMemo | ContactWithMemo, table: 'quote_requests' | 'contacts') => {
    setEditingItem({ ...item, table } as EditingItem)
    setEditDialogOpen(true)
  }

  // 메모 다이얼로그 열기
  const openMemoDialog = (item: QuoteRequestWithMemo | ContactWithMemo, table: 'quote_requests' | 'contacts') => {
    setSelectedItem({ ...item, table } as SelectedItem)
    setMemoText(loadMemo(item.id || '', table))
    setMemoDialogOpen(true)
  }

  // 첨부 파일 모달 열기
  const openAttachmentModal = (item: QuoteRequestWithMemo) => {
    setSelectedAttachment(item)
    setAttachmentModalOpen(true)
  }

  // 민감한 데이터 토글
  const toggleSensitiveData = (id: string) => {
    setShowSensitiveData(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  // CSV 다운로드 함수
  const downloadCSV = (data: (QuoteRequestWithMemo | ContactWithMemo)[], filename: string) => {
    if (data.length === 0) {
      alert('No data to download')
      return
    }

    const headers = Object.keys(data[0])
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = (row as unknown as Record<string, unknown>)[header]
          // materials 필드는 배열을 문자열로 변환
          if (header === 'materials' && Array.isArray(value)) {
            return `"${value.join(', ')}"`
          }
          // CSV에서 쉼표나 따옴표가 포함된 값은 따옴표로 감싸기
          if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`
          }
          return value || ''
        }).join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `${filename}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F6FA]">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-[#0A3D62]" />
            <p className="text-[#0A3D62] text-lg">{t('loading_data')}</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0A3D62] mb-2">{t('dashboard_title')}</h1>
            <p className="text-[#555555]">{t('dashboard_subtitle')}</p>
          </div>

          {/* 에러 메시지 */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">{t('data_load_error')}</p>
              <p>{error}</p>
              <p className="text-sm mt-2">
                {t('admin_permissions_required')}
              </p>
              <details className="mt-3">
                <summary className="cursor-pointer text-sm font-medium">
                  RLS Policy Fix Method (Click to expand)
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs space-y-3">
                  <div>
                    <p className="mb-2 font-semibold">1. Enable SELECT for contacts table:</p>
                    <pre className="bg-gray-800 text-white p-2 rounded overflow-x-auto">
{`-- contacts 테이블의 SELECT 정책을 모든 사용자에게 허용
DROP POLICY IF EXISTS "Authenticated users can view contact messages" ON contacts;
CREATE POLICY "Anyone can view contact messages" ON contacts
  FOR SELECT
  TO public
  USING (true);`}
                    </pre>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold">2. Enable UPDATE for both tables:</p>
                    <pre className="bg-gray-800 text-white p-2 rounded overflow-x-auto">
{`-- quote_requests 테이블 UPDATE 정책 추가
CREATE POLICY "Anyone can update quote requests" ON quote_requests
  FOR UPDATE
  TO public
  USING (true);

-- contacts 테이블 UPDATE 정책 추가  
CREATE POLICY "Anyone can update contact messages" ON contacts
  FOR UPDATE
  TO public
  USING (true);

-- DELETE 정책도 추가 (선택사항)
CREATE POLICY "Anyone can delete quote requests" ON quote_requests
  FOR DELETE
  TO public
  USING (true);

CREATE POLICY "Anyone can delete contact messages" ON contacts
  FOR DELETE
  TO public
  USING (true);`}
                    </pre>
                  </div>
                </div>
              </details>
            </div>
          )}

          {/* 탭 네비게이션 */}
          <div className="flex space-x-4 mb-6">
            <Button
              variant={activeTab === 'quotes' ? 'default' : 'outline'}
              onClick={() => setActiveTab('quotes')}
              className={`px-6 py-2 ${activeTab === 'quotes' 
                ? 'bg-[#0A3D62] text-white' 
                : 'bg-white text-[#0A3D62] border-[#0A3D62]'}`}
            >
              {t('quote_requests')} ({quoteRequests.length})
            </Button>
            <Button
              variant={activeTab === 'contacts' ? 'default' : 'outline'}
              onClick={() => setActiveTab('contacts')}
              className={`px-6 py-2 ${activeTab === 'contacts' 
                ? 'bg-[#0A3D62] text-white' 
                : 'bg-white text-[#0A3D62] border-[#0A3D62]'}`}
            >
              {t('contact_messages')} ({contacts.length})
            </Button>
            <div className="ml-auto flex space-x-2">
              <Button
                onClick={() => downloadCSV(
                  activeTab === 'quotes' ? quoteRequests : contacts,
                  activeTab === 'quotes' ? 'quote_requests' : 'contacts'
                )}
                variant="outline"
                className="px-4 py-2"
              >
                <Download className="h-4 w-4 mr-2" />
                {t('export_data')}
              </Button>
              <Button
                onClick={loadData}
                variant="outline"
                className="px-4 py-2"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                {t('refresh')}
              </Button>
            </div>
          </div>

          {/* 견적 요청 테이블 */}
          {activeTab === 'quotes' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Product Type</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quoteRequests.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{formatDate(item.created_at!)}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.company_name || '-'}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span>
                            {showSensitiveData[item.id!] 
                              ? item.email 
                              : item.email?.replace(/(.{3}).*(@.*)/, '$1***$2')
                            }
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSensitiveData(item.id!)}
                          >
                            {showSensitiveData[item.id!] ? 
                              <EyeOff className="h-3 w-3" /> : 
                              <Eye className="h-3 w-3" />
                            }
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{item.product_type || '-'}</TableCell>
                      <TableCell>{item.production_quantity || '-'}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openAttachmentModal(item)}
                            className="flex items-center space-x-1"
                          >
                            <Eye className="h-3 w-3" />
                            <span>View</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openEditDialog(item, 'quote_requests')}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openMemoDialog(item, 'quote_requests')}
                          >
                            <MessageSquare className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteItem(item.id!, 'quote_requests')}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* 문의사항 테이블 */}
          {activeTab === 'contacts' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>WhatsApp</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.length === 0 ? (
                    <TableRow key="no-data">
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        {error ? 'Unable to load data.' : 'No inquiries found.'}
                      </TableCell>
                    </TableRow>
                  ) : (
                    contacts.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{formatDate(item.created_at!)}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span>
                            {showSensitiveData[item.id!] 
                              ? item.email 
                              : item.email?.replace(/(.{3}).*(@.*)/, '$1***$2')
                            }
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSensitiveData(item.id!)}
                          >
                            {showSensitiveData[item.id!] ? 
                              <EyeOff className="h-3 w-3" /> : 
                              <Eye className="h-3 w-3" />
                            }
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{item.whatsapp || '-'}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {item.message}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openEditDialog(item, 'contacts')}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openMemoDialog(item, 'contacts')}
                          >
                            <MessageSquare className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteItem(item.id!, 'contacts')}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}

          {/* 수정 다이얼로그 */}
          <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
              <DialogHeader>
                <DialogTitle>Edit Item</DialogTitle>
              </DialogHeader>
              {editingItem && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.keys(editingItem).map((key, index) => {
                      if (key === 'id' || key === 'created_at' || key === 'table') return null
                      return (
                        <div key={`${key}-${index}`} className="space-y-2">
                          <label className="block text-sm font-medium text-[#0A3D62]">
                            {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </label>
                          {key === 'product_information' || key === 'additional_input' ? (
                            <textarea
                              value={(editingItem as unknown as Record<string, unknown>)[key] as string || ''}
                              onChange={(e) => setEditingItem({
                                ...editingItem,
                                [key]: e.target.value
                              } as EditingItem)}
                              className="w-full px-3 py-2 border rounded-md h-24 resize-none"
                              placeholder={`Enter ${key.replace(/_/g, ' ')}...`}
                            />
                          ) : key === 'materials' ? (
                            <input
                              type="text"
                              value={Array.isArray((editingItem as unknown as Record<string, unknown>)[key]) 
                                ? ((editingItem as unknown as Record<string, unknown>)[key] as string[]).join(', ')
                                : (editingItem as unknown as Record<string, unknown>)[key] as string || ''
                              }
                              onChange={(e) => {
                                const materialsArray = e.target.value.split(',').map(m => m.trim()).filter(m => m.length > 0)
                                setEditingItem({
                                  ...editingItem,
                                  [key]: materialsArray
                                } as EditingItem)
                              }}
                              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent"
                              placeholder="Enter materials separated by commas (e.g., opp, pp, pe)"
                            />
                          ) : (
                            <input
                              type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                              value={(editingItem as unknown as Record<string, unknown>)[key] as string || ''}
                              onChange={(e) => setEditingItem({
                                ...editingItem,
                                [key]: e.target.value
                              } as EditingItem)}
                              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent"
                              placeholder={`Enter ${key.replace(/_/g, ' ')}...`}
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex justify-end space-x-3 pt-4 border-t">
                    <Button
                      variant="outline"
                      onClick={() => setEditDialogOpen(false)}
                      className="px-6 py-2"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => updateItem(
                        editingItem.id || '', 
                        editingItem, 
                        editingItem.table || 'quote_requests'
                      )}
                      className="px-6 py-2 bg-[#0A3D62] hover:bg-[#0A3D62]/90 text-white"
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* 메모 다이얼로그 */}
          <Dialog open={memoDialogOpen} onOpenChange={setMemoDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add/Edit Memo</DialogTitle>
              </DialogHeader>
              {selectedItem && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Memo Content</label>
                    <textarea
                      value={memoText}
                      onChange={(e) => setMemoText(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md h-32"
                      placeholder="Enter your memo..."
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setMemoDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => saveMemo(selectedItem.id || '', selectedItem.table || 'quote_requests')}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* 첨부 파일 모달 */}
          <Dialog open={attachmentModalOpen} onOpenChange={setAttachmentModalOpen}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
              <DialogHeader>
                <DialogTitle>Attachment Details</DialogTitle>
              </DialogHeader>
              {selectedAttachment && (
                <div className="space-y-6">
                  {/* 고객 정보 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-[#0A3D62]">Customer Information</h3>
                      <div className="space-y-2">
                        <div><strong>Name:</strong> {selectedAttachment.name}</div>
                        <div><strong>Email:</strong> {selectedAttachment.email}</div>
                        <div><strong>Phone:</strong> {selectedAttachment.phone}</div>
                        <div><strong>Company:</strong> {selectedAttachment.company_name || '-'}</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-[#0A3D62]">Product Details</h3>
                      <div className="space-y-2">
                        <div><strong>Product Type:</strong> {selectedAttachment.product_type || '-'}</div>
                        <div><strong>Quantity:</strong> {selectedAttachment.production_quantity || '-'}</div>
                        <div><strong>Dimensions:</strong> {selectedAttachment.width || '-'} x {selectedAttachment.height || '-'}</div>
                        <div><strong>Materials:</strong> {
                          selectedAttachment.materials && Array.isArray(selectedAttachment.materials) && selectedAttachment.materials.length > 0
                            ? selectedAttachment.materials.join(', ')
                            : '-'
                        }</div>
                      </div>
                    </div>
                  </div>

                  {/* 첨부 파일 */}
                  {selectedAttachment.attached_file_url && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-[#0A3D62]">Attached File</h3>
                      <div className="border rounded-lg p-4 bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-600">
                            {selectedAttachment.attached_file_url.split('/').pop()}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(selectedAttachment.attached_file_url, '_blank')}
                            className="flex items-center space-x-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            <span>Open Full Size</span>
                          </Button>
                        </div>
                        <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                          <Image
                            src={selectedAttachment.attached_file_url}
                            alt="Attached file"
                            fill
                            className="object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500">Unable to load image</div>';
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 추가 정보 */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#0A3D62]">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div><strong>Printing Method:</strong> {selectedAttachment.printing_method || '-'}</div>
                      <div><strong>Function:</strong> {selectedAttachment.function || '-'}</div>
                      <div><strong>Formulation:</strong> {selectedAttachment.formulation || '-'}</div>
                      <div><strong>Shape:</strong> {selectedAttachment.shape || '-'}</div>
                      <div><strong>Surface:</strong> {selectedAttachment.surface || '-'}</div>
                      <div><strong>Print Count:</strong> {selectedAttachment.print_count || '-'}</div>
                    </div>
                    {selectedAttachment.product_information && (
                      <div>
                        <strong>Product Information:</strong>
                        <p className="mt-1 text-sm text-gray-600">{selectedAttachment.product_information}</p>
                      </div>
                    )}
                    {selectedAttachment.additional_input && (
                      <div>
                        <strong>Additional Input:</strong>
                        <p className="mt-1 text-sm text-gray-600">{selectedAttachment.additional_input}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setAttachmentModalOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Footer />
    </div>
  )
}